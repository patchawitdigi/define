import './new.css';

export default function New() {

    const [Newinfo, setNewinfo] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8202/publicServices/news/list.php?route${newsId}`).then(
            response => response.json().then(data => {
                setNewinfo(data);
            })
        )
    }, [])

    return (
        <div>

        </div>
    )
}