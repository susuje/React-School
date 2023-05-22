import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { substractNumber, addNumber } from '../modules/goodsCounter';
export default function GoodsCounter() {
                                    //store에서가져오는 state
    const {stock,goods} = useSelector(state => {
        return({
            stock: state.goodsReducer.stock,
            goods: state.goodsReducer.goods
        })
    })

    const dispatch = useDispatch();

                                            //action실행함수 즉 결과값이 action임 dispatch실행하면 리듀서함수실행댐.
    const onAddnumber =()=> dispatch(addNumber());
    const onSubstractNumber = ()=>dispatch(substractNumber());
    return (
        <div>
            <h2>딥러닝 개발자 무릎 담요</h2>
            <span><strong>17,500</strong>원</span>
            <div>
                <button type='button' onClick={onSubstractNumber}>Minus</button>
                <span>{goods}</span>
                <button type='button' onClick={onAddnumber}>Plus</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원
            </div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div>
    )
}
