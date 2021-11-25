import React, { useState, useEffect, useStyles } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardSubtitle,
  CardTitle,

} from 'reactstrap'
import { useDispatch } from "react-redux";
import defaultimage from '../../src/default.png'

import { getMovies } from "./../actions/movie";


const Home = (props) => {

const [allMovies, setAllMovies] = useState([])
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies()).then((res) => {
        console.log('resss', res)
        setAllMovies(res)
    })
  }, [dispatch])

  return (
    <React.Fragment>
    {console.log('abc', allMovies)}
        {allMovies &&
            allMovies.length > 0 &&
                allMovies.map((seeall) => {
                return (
                    <div class="col-md-4 col-6">
                        <Card>
                            <div>
                                <CardImg top src={  defaultimage} />
                                <CardTitle tag="h5">{seeall.app_name}</CardTitle>
                                <CardSubtitle tag="h6">{seeall.title}</CardSubtitle>
                            </div>
                        </Card>
                    </div>
      )
                  })}
    </React.Fragment>
  );
}

export default Home;
