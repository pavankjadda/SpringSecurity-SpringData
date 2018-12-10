package com.springtesting.security.config;


import com.springtesting.security.MyUserDetailsService;
import com.springtesting.security.handlers.CustomAuthenticationFailureHandler;
import com.springtesting.security.handlers.CustomAuthenticationSuccessHandler;
import com.springtesting.security.handlers.CustomLogoutSuccessHandler;
import com.springtesting.security.handlers.UsersAccessDecisionManager;
import com.springtesting.security.providers.CustomDaoAuthenticationProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.session.HttpSessionEventPublisher;

import java.util.Collection;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    private final MyUserDetailsService userDetailsService;

    @Autowired
    public SecurityConfig(MyUserDetailsService userDetailsService)
    {
        this.userDetailsService = userDetailsService;
    }


    @Override
    public void configure(AuthenticationManagerBuilder auth)
    {
        auth.authenticationProvider(getDaoAuthenticationProvider());
    }

    @Bean
    public CustomDaoAuthenticationProvider getDaoAuthenticationProvider()
    {
        CustomDaoAuthenticationProvider daoAuthenticationProvider=new CustomDaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(getBCryptPasswordEncoder());
        return daoAuthenticationProvider;
    }

    /* BCrypt strength should 12 or more*/
    @Bean
    public PasswordEncoder getBCryptPasswordEncoder()
    {
        return new BCryptPasswordEncoder(12);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
            http.authorizeRequests()
                    .antMatchers("/anonymous*").anonymous()
                    .antMatchers("/users/**").hasAuthority(AuthorityConstants.Admin)
                    .antMatchers("/admin**").hasAuthority(AuthorityConstants.Admin)
                    .antMatchers("/profile/**").hasAuthority(AuthorityConstants.User)
                    .antMatchers("/api/**").hasAuthority(AuthorityConstants.ApiUser)
                    .antMatchers("/dba/**").hasAuthority(AuthorityConstants.Dba)
                    .anyRequest().authenticated()
            .and()
                    .httpBasic()
            .and()
                    .formLogin()
                        .loginPage("/login")
                        .loginProcessingUrl("/login")
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        .failureHandler(new CustomAuthenticationFailureHandler())
                        .permitAll()
            .and()
                    .logout()
                        .deleteCookies("JSESSIONID")
                        .logoutSuccessHandler(new CustomLogoutSuccessHandler())
                        .permitAll()
            .and()
                    .rememberMe().key("uniqueAndSecret").tokenValiditySeconds(86400);


        http.sessionManagement()
                        .invalidSessionUrl("/invalidSession.html")
                        .sessionFixation()
                        .migrateSession()
                        .maximumSessions(2);
    }

    @Override
    public void configure(WebSecurity web) throws Exception
    {
        web
            .ignoring()
            .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
    }

    @Bean
    public HttpSessionEventPublisher httpSessionEventPublisher()
    {
        return new HttpSessionEventPublisher();
    }

    @Bean("authenticationManager")
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception
    {
        return super.authenticationManagerBean();
    }
}
