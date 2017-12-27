import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';
import { Elevation } from 'rmwc';

class Home extends Component {

    render() {
        return (
            <Grid>
                {Array(10).fill(0).map((item, index) =>
                    <GridCell span={((index === 2) && 12) || 6} key={index}>
                        <Elevation z="9">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias
                            aperiam at autem beatae, blanditiis consectetur deleniti eligendi eum fuga id inventore,
                            ipsum
                            libero
                            non qui repudiandae sint tenetur veniam!
                        </Elevation>
                    </GridCell>
                )}
            </Grid>
        )
    }
}

export default Home;