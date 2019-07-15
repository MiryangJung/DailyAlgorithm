#include <stdio.h>
int main() {
	int n;
	scanf("%d",&n);

	if(n%4==0){
		if(n%400==0) printf("Leap Year");
		else if(n%100==0) printf("Not Leap Year");
		else printf("Leap Year");
	}else printf("Not Leap Year");

	return 0;
}
