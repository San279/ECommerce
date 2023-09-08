import React from 'react'
import {useState,useEffect} from 'react'
import styled from "styled-components";
import Products from '../components/Products';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarSecondary from '../components/NavbarSecondary';
import DesignPoster from '../components/DesignPoster';
import { 
    useLocation, useNavigate} from 'react-router-dom';

const Container = styled.div`
`;
const Title = styled.h1`
    color: teal;
    padding: 30px;
    display: flex;
    justify-content: center;
`;
const FilterContainer = styled.div`
    display: flex;
    padding: 30px;
    justify-content: space-around;
`;

const Filter= styled.div`
    margin: 20px;
`;

const FilterText= styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    margin-left: 15px;
    padding: 5px;
`;




const Option = styled.option`
`;

const ProductList = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const filter = location.pathname.split("/")[3];
    const [filters,setFilter] = useState({})
    const [sort,setSort] = useState("newest")

    useEffect(() => {
        const setType = () => {
            if(filter !== null){
                setFilter({
                ...filters,
                ["type"]:filter,
            });
            }
        };
        setType();
    }, [filter]);
    
    const typeChange = (value)=>{
        navigate(`/products/${cat}/${value}`); //pass filter values
    };

    //navigate to specific gem type
    const categoryChange = (value)=> {
        navigate(`/products/${value}/${filter}`);
    };

    //console.log("filter from path", filter);
    //console.log("filter from state filter", filters);
     
    return (

    <Container>
        <Navbar/>
        <NavbarSecondary/>
        <DesignPoster/>
        <FilterContainer>
            <Filter>
                <FilterText>Category </FilterText>   
                    <Select onChange={(event) => categoryChange(event.target.value)}>
                        <Option value = "emerald">Emerald</Option>
                        <Option value = "ruby">Ruby</Option>
                        <Option value = "saphire">Saphire</Option>
                        <Option value = "amethyst">Aemthyst</Option>
                        <Option value = "diamond">Diamond</Option>
                        <Option value = "all">All</Option>
                    </Select>

                    <Select onChange={(event) => typeChange(event.target.value)}>
                        <Option disabled>accessories</Option>
                        <Option value = "stone">Raw</Option>
                        <Option value = "necklage">Necklage</Option>
                        <Option value = "bracelet">Bracelet</Option>
                        <Option value = "ring">Ring</Option>
                        <Option value = "piercing">Piercing</Option>
                    </Select>
            </Filter>
            <Filter>
                <FilterText>Sort by:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value = "asc">Price (ascending)</Option>
                    <Option value = "desc">Price (descending)</Option>
                    <Option value = "newest">newest</Option>
                </Select> 
            </Filter>
        </FilterContainer>
        <Products cat = {cat} filters = {filters} sort = {sort}/>
        <Footer/>
    </Container>
  )
}

export default ProductList
