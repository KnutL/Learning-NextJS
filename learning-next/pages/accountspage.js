import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export default function AccountsPage({ accounts }) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Link href="/states">
          <a>Visit all States</a>
        </Link>
      </div>
      <h1 className={styles.title}>Bank Accounts</h1>
      <div className={styles.grid}>
        {accounts.map((account, index) => (
          <Card key={index} style={{ width: "18rem" }} className="col-md-3 bg-dark text-white">
            <Card.Body>
              <Card.Title>{account.Description}</Card.Title>
              {account.Credit && (
                <Card.Text>Credit: {account.Credit}</Card.Text>
              )}
              {account.Debit && <Card.Text>Debit: {account.Debit}</Card.Text>}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://sampleapis.com/fakebank/api/Accounts");
  const accounts = await res.json();

  return {
    props: {
      accounts: accounts.slice(0, 10),
    },
  };
}
