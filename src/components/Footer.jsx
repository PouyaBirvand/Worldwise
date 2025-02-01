function Footer({styles}) {
    return (
    <footer className={styles.footer}>
        <p>&copy; Copyright {new Date().getFullYear()} By Worldwise Inc.</p>
    </footer>
    )
}

export default Footer
