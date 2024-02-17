import {marked} from "marked"
import {computed} from "vue"
import type {Ref} from "vue"


export default function useMarked(markdownRef: Ref<string>) {
    return computed(()=>{
        return marked.parse(markdownRef.value)
    })
}