package com.real.estate.palmland.Search;

import com.real.estate.palmland.entity.Location;
import com.real.estate.palmland.entity.Property;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

import java.util.Objects;

public class PropertySpecification implements
        Specification<Property> {
    private final SearchCriteria searchCriteria;

    public PropertySpecification(final SearchCriteria
                                         searchCriteria){
        super();
        this.searchCriteria = searchCriteria;
    }

    @Override
    public Specification<Property> and(Specification<Property> other) {
        return Specification.super.and(other);
    }

    @Override
    public Specification<Property> or(Specification<Property> other) {
        return Specification.super.or(other);
    }

    @Override
    public Predicate toPredicate(Root<Property> root,
                                 CriteriaQuery<?> query, CriteriaBuilder cb) {
        String strToSearch = searchCriteria.getValue()
                .toString().toLowerCase();

        switch(Objects.requireNonNull(SearchOperation.getSimpleOperation(searchCriteria.getOperation()))){
            case CONTAINS:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.like(cb.lower(locationJoin(root).<String>get(searchCriteria.getFilterKey())), "%" + strToSearch + "%");
                }
                return cb.like(cb.lower(root.get(searchCriteria.getFilterKey())), "%" + strToSearch + "%");

            case DOES_NOT_CONTAIN:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.notLike(cb.lower(locationJoin(root).<String>get(searchCriteria.getFilterKey())), "%" + strToSearch + "%");
                }
                return cb.notLike(cb.lower(root.get(searchCriteria.getFilterKey())), "%" + strToSearch + "%");

            case BEGINS_WITH:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.like(cb.lower(locationJoin(root).<String>get(searchCriteria.getFilterKey())), strToSearch + "%");
                }
                return cb.like(cb.lower(root.get(searchCriteria.getFilterKey())), strToSearch + "%");

            case DOES_NOT_BEGIN_WITH:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.notLike(cb.lower(locationJoin(root).<String>get(searchCriteria.getFilterKey())), strToSearch + "%");
                }
                return cb.notLike(cb.lower(root.get(searchCriteria.getFilterKey())), strToSearch + "%");

            case ENDS_WITH:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.like(cb.lower(locationJoin(root).<String>get(searchCriteria.getFilterKey())), "%" + strToSearch);
                }
                return cb.like(cb.lower(root.get(searchCriteria.getFilterKey())), "%" + strToSearch);

            case DOES_NOT_END_WITH:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.notLike(cb.lower(locationJoin(root).<String>get(searchCriteria.getFilterKey())), "%" + strToSearch);
                }
                return cb.notLike(cb.lower(root.get(searchCriteria.getFilterKey())), "%" + strToSearch);

            case EQUAL:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    System.out.println(searchCriteria.getValue());
                    return cb.equal(locationJoin(root).<String>get(searchCriteria.getFilterKey()), searchCriteria.getValue());
                }
                return cb.equal(root.get(searchCriteria.getFilterKey()), searchCriteria.getValue());

            case NOT_EQUAL:
                if(searchCriteria.getFilterKey().equals("addressLine1") || searchCriteria.getFilterKey().equals("city")){
                    return cb.notEqual(locationJoin(root).<String>get(searchCriteria.getFilterKey()), searchCriteria.getValue() );
                }
                return cb.notEqual(root.get(searchCriteria.getFilterKey()), searchCriteria.getValue());

            case NUL:
                return cb.isNull(root.get(searchCriteria.getFilterKey()));

            case NOT_NULL:
                return cb.isNotNull(root.get(searchCriteria.getFilterKey()));

            case GREATER_THAN:
                return cb.greaterThan(root.<String> get(searchCriteria.getFilterKey()), searchCriteria.getValue().toString());

            case GREATER_THAN_EQUAL:
                return cb.greaterThanOrEqualTo(root.<String> get(searchCriteria.getFilterKey()), searchCriteria.getValue().toString());

            case LESS_THAN:
                return cb.lessThan(root.<String> get(searchCriteria.getFilterKey()), searchCriteria.getValue().toString());

            case LESS_THAN_EQUAL:
                return cb.lessThanOrEqualTo(root.<String> get(searchCriteria.getFilterKey()), searchCriteria.getValue().toString());
        }
        
        
        
        return null;
    }
    private Join<Property, Location> locationJoin(Root<Property>                                                             root){
        return root.join("location");
    }

}
