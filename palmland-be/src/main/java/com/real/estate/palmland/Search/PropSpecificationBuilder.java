package com.real.estate.palmland.Search;

import com.real.estate.palmland.entity.Property;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

public class PropSpecificationBuilder {

	private final List<SearchCriteria> params;

	public PropSpecificationBuilder() {
		this.params = new ArrayList<>();
	}

	public final PropSpecificationBuilder with(String key, String operation, Object value) {
		params.add(new SearchCriteria(key, operation, value));
		return this;
	}

	public final PropSpecificationBuilder with(SearchCriteria searchCriteria) {
		params.add(searchCriteria);
		return this;
	}

	public Specification<Property> build() {
		if (params.size() == 0) {
			return null;
		}

		Specification<Property> result = new PropertySpecification(params.get(0));
		for (int idx = 1; idx < params.size(); idx++) {
			SearchCriteria criteria = params.get(idx);
			result = SearchOperation.getDataOption(criteria.getDataOption()) == SearchOperation.ALL
					? Specification.where(result).and(new PropertySpecification(criteria))
					: Specification.where(result).or(new PropertySpecification(criteria));
		}

		return result;
	}
}
