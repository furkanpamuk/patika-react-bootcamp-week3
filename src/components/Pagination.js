import React from 'react'

function Pagination({ currentPage, setCurrentPage, totalPage }) {

    // Sayfa numara düzenleri  
    const firstOrder = [1, 2, 3, 4, '...', totalPage];
    const secondOrder = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPage];
    const thirdOrder = [1, '...', totalPage - 3, totalPage - 2, totalPage -1, totalPage];

    // Bulunulan sayfa ve '...' dışındaki sayfalara tıklanıldığında CurrentPage' e yeni sayfa numarası set edildi.  
    function handleSetPage(value) {
        if (currentPage !== value && value !== '...') {
            setCurrentPage(value);
        }
    }

    return (
        <div className='pagesBox container'>
            <ul className='pagination'>
                
                <li onClick={() => handleSetPage(currentPage - 1)} className={`${currentPage === 1 ? 'pageNumber hidden' : 'pageNumber'} `} >Prev</li>

                {
                    currentPage < 4 && firstOrder.map((item, index) =>
                        <li key={index} className={`${currentPage === item ? 'pageNumber active' : 'pageNumber'} `} onClick={() => handleSetPage(item)}>{item}</li>
                    )
                }

                {
                    (currentPage >= 4 && currentPage <= (totalPage - 3)) &&
                    secondOrder.map((item, index) => 
                    <li key={index} className={`${currentPage === item ? 'pageNumber active' : 'pageNumber'} `} onClick={() => handleSetPage(item)}>{item}</li>
                    )
                }

                {
                    currentPage > (totalPage - 3) &&
                    thirdOrder.map((item, index) =>
                        <li key={index} className={`${currentPage === item ? 'pageNumber active' : 'pageNumber'} `} onClick={() => handleSetPage(item)}>{item}</li>
                    )
                }

                <li onClick={() => handleSetPage(currentPage + 1)} className={`${currentPage === totalPage ? 'pageNumber hidden' : 'pageNumber'} `} >Next</li>

            </ul>
        </div>
    )
}

export default Pagination;