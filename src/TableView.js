import React from 'react';

const TableView = ({ jsonData }) => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>type</th>
                    <th>name</th>
                    <th>ppu</th>
                    <th>batter</th>
                    <th>topping</th>
                </tr>
            </thead>
            <tbody>
                {jsonData.map(item => {
                    const toppingTypes = item.topping.map(topping => topping.type).join(', ');
                    const batterRows = item.batters.batter.map(batter => (
                        <tr key={batter.id}>
                            <td>{item.id}</td>
                            <td>{item.type}</td>
                            <td>{item.name}</td>
                            <td>{item.ppu}</td>
                            <td>{batter.type}</td>
                            <td>{toppingTypes}</td>
                        </tr>
                    ));
                    return batterRows;
                })}
            </tbody>
        </table>
    );
};

export default TableView;
