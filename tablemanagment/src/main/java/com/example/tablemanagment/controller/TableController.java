package com.example.tablemanagment.controller;

import com.example.tablemanagment.table.TableM;
import com.example.tablemanagment.table.TableMRequestDTO;
import com.example.tablemanagment.table.TableMResponseDTO;
import com.example.tablemanagment.table.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tablem")
public class TableController {
    @Autowired
    private TableRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public String saveTable(@RequestBody TableMRequestDTO data) {
        TableM tableData = new TableM(data);
        repository.save(tableData);
        return "Database connection is successful!";
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<TableMResponseDTO> getAll() {
        return repository.findAll().stream().map(TableMResponseDTO::new).toList();
    }
}
