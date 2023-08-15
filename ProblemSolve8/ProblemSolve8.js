class ListNode{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head,k)
{
    if(!head || !head.next ||k===0)
    {
        return head;
    }
    let curr =head;
    let prev =null;
    let next = null;
    let count =0;

    while(curr && count<k)
    {
        next =curr.next;
        curr.next = prev;
        prev=curr;
        curr =next;
        count++;
    }

    if(next)
    {
        head.next = reverseLinkedList(next,k);
    }

    return prev;
}

const head =new ListNode(1);
head.next =new ListNode(2);
head.next.next =new ListNode(3);
head.next.next.next =new ListNode(4);
head.next.next.next.next =new ListNode(5);

const k=2;
const reversHead = reverseLinkedList(head,k);

let current = reversHead;
while (current)
{
    console.log(current.data);
    current=current.next;
}