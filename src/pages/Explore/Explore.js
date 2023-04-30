import BookResult from "../../components/ui/BookResult";
import useQuery from "../../hooks/useQuery";
import FormInput from "../../components/form/FormInput";
import {books as data} from "../../utils/fake-search-results"
import "../../stylesheets/Explore.css";

function Explore({ user, logout }) {
  const { status, searchBook } = useQuery();

  // La data tiene que venir de useQuery, pero aca la vamos a feikear 
  // para laburar mientras tanto.
 
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query === "") {
      return;
    }
    console.log(query);
    searchBook(query)
    e.target.elements.query.value = ""
  }

  return (
    <>
      <div className="header">
        <div className="page-presentation">
          <h1>Find your favorites books and keep track of them.</h1>
        </div>
        <form className="search-form-container" onSubmit={handleSubmit}>
          <FormInput label="query" type="text" placeholder="Enter your book name"/>
          {status === "loading" ? (
            <p>Loading...</p>
          ) : (
            <button>
              <i className="fa-solid fa-magnifying-glass" type="submit"></i>
            </button>
          )}
        </form>
      </div>
      <div className="results">{data ? <BookResult data={data} /> : null}</div>
    </>
  );
}

export default Explore;
