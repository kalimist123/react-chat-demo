import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchNpiDataExampleState {
    npiLocations: NpiLocation[];
    loading: boolean;
}

export class FetchNpiData extends React.Component<RouteComponentProps<{}>, FetchNpiDataExampleState> {
    constructor() {
        super();
        this.state = { npiLocations: [], loading: true };

        fetch('api/Npi/NpiLocations')
            .then(response => response.json() as Promise<NpiLocation[]>)
            .then(data => {
                this.setState({ npiLocations: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchNpiData.renderNpiLocationsTable(this.state.npiLocations);

        return <div>
                   <h1>NpiLocations</h1>
                   <p>This component demonstrates fetching data from the server.</p>
                   {contents}
               </div>;
    }

    private static renderNpiLocationsTable(npiLocations: NpiLocation[]) {
        return <table className='table'>
                   <thead>
                   <tr>
                       <th>Npi Number</th>
                       <th>Location</th>
                       <th>Date Added</th>
                 
                   </tr>
                   </thead>
                   <tbody>
                   {npiLocations.map(npiLocation =>
                    <tr key={npiLocation.npiNumber}>
                        <td>{npiLocation.npiNumber}</td>
                        <td>{npiLocation.location}</td>
                        <td>{npiLocation.dateAdded}</td>
                          
                       </tr>
                   )}
                   </tbody>
               </table>;
    }
}

interface NpiLocation {
    npiNumber: string;
    location: string;
    dateAdded: string;
   
}
