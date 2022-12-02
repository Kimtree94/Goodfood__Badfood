package com.Goodfood_Badfood.domain.dto;

import com.Goodfood_Badfood.domain.entity.PointEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class PointDto {
   private int pno; // 포인트
   private String reviewContents; // 후기
   private String pname; //닉네임
   private int point;

   public PointEntity toEntity(){
      return PointEntity.builder()
              .pno(this.pno)
              .reviewContents(this.reviewContents)
              .pname(this.pname)
              .point(this.point)
              .build();
   }
}
