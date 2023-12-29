import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from "react-native";


const App = () => {
    const handleClick = () =>{
        alert("Merhaba");
    
};



return (
    <view style={StyleSheet.container}>
        <button title="Click Button" onPress={handleClick} />
        <TouchableOpacity onPress={handleClick}>
            <text>Click TouchableOpacity</text>
        </TouchableOpacity>
        <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert ("Pressed!")}
        >
        
        <text>Click TouchableHighlight</text>
        </TouchableHighlight>
        

        <TouchableWithoutFeedback onPress={() => alert("Pressed")}>
            <text> Click TouchableWithoutFeedback </text>
        </TouchableWithoutFeedback>
        </view>
    );
};
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            },
        });