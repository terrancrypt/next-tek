import React from 'react'
import GridCategoryCard from './GridCategoryCard'

const GridCategory: React.FC = () => {
    return (
        <div className='container mx-auto h-[500px] my-[80px]'>
            <div className='grid grid-cols-4 gap-8'>
                <GridCategoryCard />
                <GridCategoryCard />
                <GridCategoryCard />
                <GridCategoryCard />
            </div>
        </div>

    )
}

export default GridCategory