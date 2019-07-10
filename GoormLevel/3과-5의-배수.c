#include <stdio.h>
int main() {
	int n,i,sum=0;
	scanf("%d",&n);
	for(i=3; i<=n; i++){
		if(i%3==0 | i%5==0) sum=sum+i;
	}
	printf("%d",sum);
	return 0;
}
