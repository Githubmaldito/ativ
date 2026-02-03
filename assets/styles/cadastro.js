import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    top: 30,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#402020',
  },
  card: {
    backgroundColor: '#490404' ,
    borderRadius: 16,
    padding: 20,
    marginVertical: 6,
    shadowColor: '#13775c',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#fff',
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: '#ffffff',
    marginBottom: -20,
  },
  form: {
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    marginVertical: 16,
    color: '#d7ffa8',
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#5d3c3c',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: 22,
  },
  inputIcon: {
    marginRight: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 58,
    color: '#fff',
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 18,
    height: 100,
    color: '#fff',
  },
  placeholderContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: '#fff',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#5e4242',
    borderRadius: 12,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
  },
    footer: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    marginVertical: 24
  },
  footerText: {
    fontSize: 18,
    color: '#fff'
  },
  link: {
    fontSize: 18,
    color: '#00ffd9',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "600",
  },
  buttonIcon: {
    marginRight: 8,
  },

});

export default styles;