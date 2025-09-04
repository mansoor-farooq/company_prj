import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../page/NotFoundPage'
import Home from '../page/Home'
// import private_router from './private_router.jsx'
function AddRoutes() {

    return (
        <Fragment>
            <Routes>
                {/* <Route element={<private_router />} > */}

                {/* {""} */}
                <Route path='/' element={<Home />} />

                <Route path='*' element={<NotFoundPage />} />
                {/* </Route> */}

            </Routes>
        </Fragment>






    )
}

export default AddRoutes
