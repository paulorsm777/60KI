package com.example.tablemanagment.table;

public record TableMResponseDTO(long id, Integer seats, String location, String busy) {
    public TableMResponseDTO(TableM table) {
        this(table.getId(), table.getSeats(), table.getLocation(), table.getBusy());
        
    }
}
