import { Component } from "react";
import yes from "./yes.jpg";

export class Work extends Component {

    state = {
        userText: '',
        //отвечает за изменение состояния текста
        massiv: []
        //отвечает за внесение дела в массив
    }


    Vvod(e) {

        this.setState( {userText: e} );

        console.log(e)
    }


    dobavElement(plusStroka) {

        if (plusStroka === "") {
            alert("Введите значение!")
        }
        else {

        let newMassiv = this.state.massiv;
        newMassiv.push(plusStroka);
        this.setState({massiv: newMassiv, userText: ""});
        console.log(newMassiv)

        }

    }


    cherta(e) {
        const li = e.target;
        li.classList.toggle('word')
    }

    udalElement() {
        let newMassiv = this.state.massiv;
        newMassiv = [];
        this.setState({massiv: newMassiv})
    }

    knopkaEnter(e) {
        e.preventDefault()
    }


    render() {
        return(
            <div className="Container">
            <form onSubmit={this.knopkaEnter} >
                <div>
                    <input
                        placeholder="введите дело..."
                        type='text' 
                        onChange={ (e) => {this.Vvod(e.target.value)} }
                        value= {this.state.userText}
                        //value - то что прописал пользователь на данный момент
                    />
                </div>

                <div>
                    <button className="btn1" onClick={ () => {this.dobavElement(this.state.userText)} }>ДОБАВИТЬ</button>
                </div>

                <ul>
                    {this.state.massiv.map( (item, index) => (<li onClick={this.cherta} key={index}> <img src={yes} alt='yes' width='30px' /> {item} </li>) )}
                </ul>

                <div>
                    <button className="btn2" onClick={ () => {this.udalElement()}  }>УДАЛИТЬ</button>
                </div>

            </form>
            </div>
        )
    }
}

