import React, { useEffect, useState } from 'react';
import { fetchSuggestions } from '../../services';
import { EmailInput } from '../../components';

export const Form = () => {
    const [options, setOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            const results = await fetchSuggestions();
            setOptions(results);
        };
        fetchOptions();
    }, [])

    const handleFilter = (value) => {
        const result = options.filter(option=>value !== '' && option.value.toLowerCase().includes(value.toLowerCase()));
        setFilteredOptions(result)
    }

    const handleSelect = (tag) => {
        setTags((prevState) => {
            const newTags = [...prevState];
            newTags.push(tag.value);
            return newTags;
        });
    }

    const handleRemove = (tag) => {
        const newTags = tags.filter(item=>tag !== item)
        setTags(newTags);
    }

    return (
        <EmailInput 
            options={filteredOptions} 
            filterOptions={handleFilter} 
            tags={tags}
            selectTag={handleSelect}
            removeTag={handleRemove}
        />
    )

}