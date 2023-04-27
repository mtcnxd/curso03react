import PageTitle from "./PageTitle"
import ResultItem from "./ResultItem"

const ResultList = () => {
    return (
        <div>
           <PageTitle title={'Resultados'} />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <ResultItem />
                </tbody>
            </table>
        </div>
    )
}

export default ResultList