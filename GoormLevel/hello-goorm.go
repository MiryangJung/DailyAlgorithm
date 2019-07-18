package main
import "fmt"
func main() {
	var input int
	_, err := fmt.Scanln(&input);
	if err != nil {
		panic(err)
	}
	for i := 1; i <= input; i++ {
		fmt.Println("Hello Goorm !");
	}
}
