class Study extends React.Component {
    render() {
        return  (   
            <div className="Study">
                <h3 className="Study-UniversityName">
                    {studyModel.universityName}
                </h3>
                <h3 className="Study-PlatformName">
                    {studyModel.platformName}
                </h3>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="6">
                                <span>Дисциплины:</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studyModel.semesters.map((semester, index) => 
                            <tr key={index}>
                                <th>{semester.name}</th>
                                {
                                    semester.disciplines.map((discipline, index) =>
                                        <td key={index}>{discipline.name}</td> 
                                    )
                                }
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}