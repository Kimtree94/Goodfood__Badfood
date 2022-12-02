package com.Goodfood_Badfood.domain.entity;

import com.Goodfood_Badfood.domain.dto.PointDto;
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
public class PointEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pno; // 포인트
    @Column
    private String reviewContents; // 후기
    @Column(nullable = false)
    private String pname;
    @Column(nullable = false)
    private int point;

    public PointDto toDto() {
        return PointDto.builder()
                .pno(this.pno)
                .reviewContents(this.reviewContents)
                .pname(this.pname)
                .point(this.point)
                .build();
    }
}
