import { React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/Slice/FetchDataSlice';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { BiSearchAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
function Search(props) {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Searchinput, setSearchinput] = useState({});

    const dispatch = useDispatch();
    const SearchProducts = useSelector(state => state.fetchAllData);
    const itemList = [];
    const [filteredList, setFilteredList] = useState(itemList);


    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    SearchProducts.data.map((ser) => (itemList.push(ser.name)))

    const filterBySearch = (e) => {
        setFilteredList(itemList);

        const query = e.target.value;

        let updatedList = [...itemList];

        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(updatedList);


    }


    const getSearchElement = (data) => {
        let selectitem = SearchProducts.data.find(item => item.name === data);
        setSearchinput(selectitem);
    }
    const ClickSearch = () => {
        console.log(Searchinput.name)
        handleClose();
        setSearchinput({});
    }


    return (
        <>
            <BiSearchAlt onClick={handleShow} />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                  <Link to={'/'}>  
                <Modal.Header closeButton/></Link>
                <Modal.Body>
                <Modal.Title>Search:</Modal.Title>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Control id="search-box" onChange={filterBySearch} />
                        </Form.Group>

                        {filteredList.map((item, index) => (
                            <ol key={index} className='search-ol' >
                                <h5
                                    className='Search-Link' onClick={() => { getSearchElement(item) }}>
                                    {item}</h5></ol>

                        ))
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                
                    {Searchinput.name == null ? null :
                        <Link
                            to={"/oneitem"} className='Search-btn'
                            state={Searchinput} onClick={ClickSearch}>
                            Search
                        </Link>
                    }
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Search;