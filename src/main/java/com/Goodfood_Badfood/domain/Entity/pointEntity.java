package com.Goodfood_Badfood.domain.Entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Table(name = "point")
@Entity
public class pointEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pno; // 포인트 순서
    @Column
    private String content; // 후기

}
