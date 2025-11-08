function ListaLivros()
{
    const livros = ["Dom Casmurro", "1984", "O Hobbit"];

    return (
            <ul>
            {livros.map((livro, i) => (
            <li key={i}>{livro}</li>
            ))}
            </ul>
    );
}

export default ListaLivros;