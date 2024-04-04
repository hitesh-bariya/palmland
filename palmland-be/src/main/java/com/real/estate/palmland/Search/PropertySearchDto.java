package com.real.estate.palmland.Search;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertySearchDto {
	
	private List<SearchCriteria> searchCriteriaList;
	
	private String dataOption;
}
