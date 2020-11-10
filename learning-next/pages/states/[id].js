import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function State({ state }) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        <Link href="/states">Go to all states</Link>
      </h1>
      <img src={state.flag} alt={state.name} width="100" />
      <h1 className={styles.description}>{state.name}</h1>
      <Table className="col-md-2" bordered hover variant="dark">
        <colgroup span="4" />
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.id}</td>
            <td>{state.name}</td>
            <td>{state.capital}</td>
            <td>{state.population}</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <Button
          href={`/states/${
            parseInt(state.id, 10) === 1 ? "" : parseInt(state.id, 10) - 1
          }`}
          variant="dark"
        >
          Previous
        </Button>
        {' '}
        <Button
          href={`/states/${
            parseInt(state.id, 10) === 50 ? "" : parseInt(state.id, 10) + 1
          }`}
          variant="dark"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://sampleapis.com/the-states/api/the-states");
  const states = await res.json();

  const paths = states.map((state) => `/states/${state.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://sampleapis.com/the-states/api/the-states?id=${params.id}`
  );
  const state = await res.json();

  return {
    props: {
      state: state[0],
    },
  };
}
