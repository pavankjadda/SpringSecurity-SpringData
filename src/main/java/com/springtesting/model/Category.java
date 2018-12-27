package com.springtesting.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@Table(name = "category")
public class Category extends AbstractAuditingEntity
{

    @Id
    @Column(name = "id")
    private String id;

    @NotNull(message = "Category name must not be null")
    @NotEmpty
    @Column(name = "name", nullable = false)
    private String name;

    public Category()
    {

    }

    public Category(String id,  String name)
    {
        this.id = id;
        this.name = name;
    }
}
