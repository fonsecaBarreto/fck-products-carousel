
import React, { Children, useCallback, useEffect, useRef, useState } from 'react'
import './styles/main.css'
import { ProductsCarousel } from './protocols'
export * from "./protocols"

const useResize = () => {
    const [width, setWidth] = useState(0)
    const ref:any = useCallback((node:any)=> {
        if (node !== null) {   
            const handleResize = () => {
                const { width } = node.getBoundingClientRect();
                setWidth(width);
            }
            handleResize();
            window.addEventListener('resize', handleResize)
            return () =>  window.removeEventListener('resize', handleResize)
        }
    }, []);
    return [ref, { width }]
}

const COLUMNS = [4,3,2.3,1.6]
export const ProductsCarouselComponent: React.FunctionComponent<ProductsCarousel.Params> = ({ records, children, viewport_height=300 }) =>{

    const [ ref, { width : viewPortWidth }]: any = useResize();
    const [ columnIndex, setColumnIndex ] = useState(0)
    const [ itemWidth, setItemWidth ] = useState(0)
    const [ offset, setOffset ] = useState(0)

    useEffect(() => {
        if(viewPortWidth == 0) return;
        let cl = viewPortWidth > 1024 ? 0 : viewPortWidth > 756 ? 1 : viewPortWidth > 480 ? 2: 3;
        setItemWidth(Math.round(viewPortWidth / COLUMNS[cl]) );
        setColumnIndex(cl)
        setOffset(0)
    },[viewPortWidth]);

    const handleClick = (key: string) =>{
        let n_colunas = COLUMNS[columnIndex];
        setOffset(prev=> {
            let jump = prev + 1 * (key =="RIGHT" ? 1 : -1)
            switch(key){
                case 'RIGHT':
                    if(jump > 0){
                        jump = (records.length - n_colunas) * -1 ;
                    }
                break;

                case 'LEFT': 
                    if(Math.abs(jump) > records.length - n_colunas ){
                        jump = 0;
                    }
                break;
            }
            return jump;
        }) 
    }

    const calcAbsOffset = (offset: number): number => {
        var jump =  itemWidth * offset /* * 100 / (itemWidth * records.length) */  /* * 2; */
        return jump
    }

    return (
        <div className='fck-products-carousel'>
            <div className='fckpc-aside'> <button onClick={()=>handleClick("LEFT")}>&lsaquo;</button> {offset} </div>
            <nav className='fckpc-viewport' ref={ref} style={{height: viewport_height}} >
                <div className='fckpc-pool' style={{ left :`${calcAbsOffset(offset)}px`} }>
                    { records.map( (rec,i)=>(
                        <div key={i} style={{width: `${itemWidth}px`, height: `${viewport_height - 12 }px`}} className='fckpc-itemwarpper'> 
                           { React.cloneElement(children, { ...rec })}
                        </div>))
                    }
                </div>
            </nav>
            <div className='fckpc-aside'>  <button className='asideright'  onClick={()=>handleClick("RIGHT")} >&rsaquo;</button></div>
        </div>
    )
}

export default ProductsCarouselComponent