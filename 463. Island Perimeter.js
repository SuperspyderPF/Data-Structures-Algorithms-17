var islandPerimeter = function(grid) {
    let per = 0;
    
    for (let i = 0; i < grid.length; i++ ){
        for(let j = 0; j < grid[i].length; j++){
            if (grid[i][j] == 1) per = per + check_all(i,j,grid)
        }
    }
    return per
};

function check_up(i,j,grid){
    if (i == 0) return 1
    else return (grid[i-1][j] - 1) ** 2
}

function check_left(i,j,grid){
    if (j == 0) return 1
    else return (grid[i][j-1] - 1) ** 2
}
function check_right(i,j,grid){
    if (j == grid[0].length - 1) return 1
    else return (grid[i][j+1] - 1) ** 2
}
function check_down(i,j,grid){
    if (i == grid.length - 1) return 1
    else return (grid[i+1][j] - 1) ** 2
}

function check_all(i,j,grid){
    return check_up(i,j,grid) + check_left(i,j,grid) + check_right(i,j,grid) + check_down(i,j,grid)
    
}