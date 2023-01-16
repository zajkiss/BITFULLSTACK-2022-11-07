import './postai.css';

const Post = ( props ) => {
    return (

            <div className="postas col-8">
                <img src={drakonas.post.image}  width="200px" alt="Italian Trulli" />
                <p className="kategorija">{props.post.category}</p>
                <p className="data">{props.post.date}</p>
                <p className="pavadinimas">{props.post.title}</p>
                <p className="kontentas">{props.post.content}</p>
                <a href="https://www.w3schools.com">Continiue reading &#x2192;</a> 
            </div>
        
    );
}

export const Irasas = () => {
    return 'Labas';
}

export default Post;