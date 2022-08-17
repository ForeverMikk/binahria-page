import React from 'react'
import { useTranslation } from 'react-i18next'

import './CatalogoList.css'

const CatalogoList = () => {
    
    const {t} = useTranslation();

    return (
        <div id="CatList">
            <div className="TableWrapper">
                <table>
                    <tbody>
                        <tr style={{borderTop:'2px solid #753399'}}>
                            <td><a href="#as01">{t('catalogo.table.itemOne')} &rarr;</a></td>
                            <td><a href="#esp1">{t('catalogo.table.itemTwo')} &rarr;</a></td>
                        </tr>
                        <tr>
                            <td><a href="#as02">{t('catalogo.table.itemThree')} &rarr;</a></td>
                            <td><a href="#as03">{t('catalogo.table.itemFour')} &rarr;</a></td>
                        </tr>
                        <tr>
                            <td><a href="#as04">{t('catalogo.table.itemFive')} &rarr;</a></td>
                            <td><a href="#as05">{t('catalogo.table.itemSix')} &rarr;</a></td>
                        </tr>
                        <tr style={{borderBottom:'2px solid #753399'}}>
                            <td><a href="#as06">{t('catalogo.table.itemSeven')} &rarr;</a></td>
                            <td><a href="#esp2">{t('catalogo.table.itemEight')} &rarr;</a></td>
                        </tr >                            
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CatalogoList;