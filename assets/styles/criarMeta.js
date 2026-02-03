import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    top: 100,
    justifyContent: 'space-between',

  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: '#402020',
  },
  card: {
    backgroundColor: '#284845' ,
    borderRadius: 16,
    padding: 12,
    borderColor: '#fff',
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: '#6d4c4c',
    marginBottom: 8,
  },
  sub:{
    marginVertical: 2,
    fontSize: 14,
    color: '#ff0000',
    fontWeight: '900',
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
    backgroundColor: '#9a6a6a',
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
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "600",
  },
  buttonIcon: {
    marginRight: 8,
  },
  // botaoCad: {
  //   padding: 12,
  // },
  footer: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    justifyContent: 'center',
    top:20,
    marginVertical: 24
  },
  footerText: {
    fontSize: 16,
    color: '#ff1d1d'
  },
  link: {
    fontSize: 16,
    color: '#34ff29',
  },
});
export default styles