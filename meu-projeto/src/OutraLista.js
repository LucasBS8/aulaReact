function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas</h3>
            {itens.length > 0 ? (
                //modelo não recomendade de usar id, apenas para não aprecer erro
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                ))) :(
                <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default OutraLista