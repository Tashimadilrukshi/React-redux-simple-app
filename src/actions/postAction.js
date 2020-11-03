//action ekedi thamai API eka call karanne

import {FETCH_BUTTON_CLICKED} from './types'
import {SELECT_POST} from './types'

export const fetchPosts = () => { //action eken wenne button eka click kalama post tika fetch karana eka nisa
    console.log("hdsgf")
    return{
        type: FETCH_BUTTON_CLICKED, //action ekata podi description ekak
        payload: [
            {
                userId: 1,
                id: 1,
                title: "1afjdsfhosfsfsefj jfenhfoie fdf",
                body: "1hdfiuhgd jehsifes bfesfjkes fjehsfhes ufeshfe bcdsifknj ufewfhiw ufwiedsncsd bfuehfe ufeuhtfnwesf buhsed ushaiS bua"
            },
            {
                userId: 1,
                id: 2,
                title: "21afjdsfhosfsfsefj jfenhfoie fdf",
                body: "21hdfiuhgd jehsifes bfesfjkes fjehsfhes ufeshfe bcdsifknj ufewfhiw ufwiedsncsd bfuehfe ufeuhtfnwesf buhsed ushaiS bua"
            },
            {
                userId: 1,
                id: 3,
                title: "31afjdsfhosfsfsefj jfenhfoie fdf",
                body: "31hdfiuhgd jehsifes bfesfjkes fjehsfhes ufeshfe bcdsifknj ufewfhiw ufwiedsncsd bfuehfe ufeuhtfnwesf buhsed ushaiS bua"
            },
            {
                userId: 1,
                id: 4,
                title: "41afjdsfhosfsfsefj jfenhfoie fdf",
                body: "41hdfiuhgd jehsifes bfesfjkes fjehsfhes ufeshfe bcdsifknj ufewfhiw ufwiedsncsd bfuehfe ufeuhtfnwesf buhsed ushaiS bua"
            },
            {
                userId: 1,
                id: 5,
                title: "51afjdsfhosfsfsefj jfenhfoie fdf",
                body: "51hdfiuhgd jehsifes bfesfjkes fjehsfhes ufeshfe bcdsifknj ufewfhiw ufwiedsncsd bfuehfe ufeuhtfnwesf buhsed ushaiS bua"
            },
        ]
    }
}

export const selectPost = (post) => {
    return{
        type:SELECT_POST,
        payload:post
    }
}