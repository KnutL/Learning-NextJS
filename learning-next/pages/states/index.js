import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Table from 'react-bootstrap/Table';

export default function States ({states}) {
    return(
        <div className={styles.main}>
            <h1>All states</h1>
            <Table className="col-md-5" bordered hover variant="dark">
                <colgroup span="4" />
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Capital</th>
                        <th>Population</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {states.map((state, index) => (
                        <tr key={index}>
                            <td>{state.id}</td>
                            <td>{state.name}</td>
                            <td>{state.capital}</td>
                            <td>{state.population}</td>
                            <td>
                                <Link href={`/states/${state.id}`}>Learn more</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://sampleapis.com/the-states/api/the-states`);
    const states = await res.json();

    return {
        props: {
            states
        }
    };
}
