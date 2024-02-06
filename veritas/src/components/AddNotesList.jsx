import { FaDeleteLeft } from "react-icons/fa6";

function AddNotesList() {
  const time = 10;
  return (
    <div className="home">
      <h1 className="notesListHeading">Your Notes</h1>
      <div className="notesContainer">
        <div className="notesList">
          <div className="notesTitle">This is your notes title.</div>
          <div className="notesTime">{time}</div>
          <FaDeleteLeft className="notesDelete" />
        </div>
        <div className="notesDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis
          debitis perferendis deleniti reiciendis illum facilis reprehenderit
          ipsa, numquam possimus quas obcaecati tenetur earum sed? Nulla beatae
          provident, explicabo in reiciendis mollitia, commodi dolor esse
          officia illo at, sapiente eum nostrum consequatur hic praesentium?
          Repellat perferendis rerum itaque culpa nesciunt, numquam nam saepe ea
          facere provident, recusandae veniam inventore ipsum harum quisquam
          quod debitis aliquam labore illum cumque, enim facilis tempora non
          quos? Veritatis quae, magni ipsa reprehenderit placeat nobis
          dignissimos iste quia fugit repudiandae repellat dolor nesciunt
          doloribus necessitatibus nemo dicta voluptates. Perspiciatis tempore
          praesentium blanditiis, doloremque totam deserunt!
        </div>
      </div>
    </div>
  );
}

export default AddNotesList;
