export default function NeighborhoodsList (){
    
        this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    

    addNeighborhood = (newNeighborhood) => {
        this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods;
    }
};

