package com.springtesting.web.api.product;

import com.springtesting.model.product.Manufacturer;
import com.springtesting.repo.ManufacturerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/v1/manufacturer")
public class ManufacturerController
{
    private final ManufacturerRepository manufacturerRepository;

    public ManufacturerController(ManufacturerRepository manufacturerRepository)
    {
        this.manufacturerRepository = manufacturerRepository;
    }

    @GetMapping(value = "/list")
    public List<Manufacturer> getManufacturers()
    {
        return manufacturerRepository.findAll();
    }

    @GetMapping(value = "/find/{id}")
    public Optional<Manufacturer> getManufacturerById(@PathVariable Long id)
    {
        return manufacturerRepository.findById(id);
    }

    @PostMapping(path = "/create")
    public Manufacturer createManufacturer(@RequestBody Manufacturer manufacturer)
    {
        return manufacturerRepository.saveAndFlush(manufacturer);
    }
}
