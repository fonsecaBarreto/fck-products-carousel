
import React, { useEffect, useRef, useState } from 'react'
import './styles/main.css'
import { ProductsCarousel } from './protocols'
export * from "./protocols"

export const ProductsCarouselComponent: React.FunctionComponent<ProductsCarousel.Params> = ({  }) =>{
    return (
        <div className='fck-products-carousel'>
            <div> left </div> testando
            <nav className='fckpc-viewport'>
                <div className='fckpc-pool'>
                    <div className='fckpc-itemwarpper'>

                    </div>
                </div>
            </nav>
            <div> right</div>
        </div>
    )
}

export default ProductsCarouselComponent