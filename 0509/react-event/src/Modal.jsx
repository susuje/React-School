import './Modal.css'
                            //{children} 으로 보내면  {props.children}가 아닌 그냥 [children}
export default function Modal(props) {

    return(
        <div className='modal-backdrop'>
            <article className='modal'>
                {props.children}
                {/* <h2>홈페이지에 오신것을 환영환영</h2>
                <p>좋은하루 되세요!</p> */}
                <button onClick={props.modalClose}>닫기</button>
            </article>
        </div>
    )

}


// export default function Modal({ children, modalClose }) {
//     return (
//         <div className='modal-backdrop'>
//             <article className='modal'>
//                 {children}
//                 {/* <h2>홈페이지에 오신것을 환영합니다!</h2>
//                 <p>좋은하루 되세요!</p> */}
//                 <button onClick={modalClose}>닫기</button>
//             </article>
//         </div>
//     )
// }