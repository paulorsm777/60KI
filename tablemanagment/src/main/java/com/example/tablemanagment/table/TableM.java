package com.example.tablemanagment.table;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Table(name = "tablem")
@Entity(name = "tablem")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class TableM {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer seats;
    private String location;
    private String busy;

    public TableM(TableMRequestDTO data) {
        this.location = data.location();
        this.seats = data.seats();
        this.busy = data.busy();
    }
}
