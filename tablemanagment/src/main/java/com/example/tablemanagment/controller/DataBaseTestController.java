package com.example.tablemanagment.controller;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class DataBaseTestController {
    private final JdbcTemplate jdbcTemplate;

    public DataBaseTestController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public String testDatabaseConnection() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            return "Database connection is successful!";
        } catch (Exception e) {
            return "Failed to connect to the database: " + e.getMessage();
        }
    }
}
