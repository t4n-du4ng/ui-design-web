import { useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { MHeader } from '../components'
import MCourseCard from '../components/MCourseCard'
import MCreatorCard from '../components/MCreatorCard'
import MVideoCard from '../components/MVideoCard'
import { Search } from '../model/Search'

import videoImage01 from '../assets/images/js-from-basic.png'

import courseImage01 from '../assets/images/js.png'

import creatorImage01 from '../assets/images/creator01.png'
import { useMemo } from 'react'

export interface IMSearchProps {
    id?: string
}

// import logo from '../assets/images/js-from-basic.png'

const data: Search[] = [
    // videos
    {
        id: uuidv4(),
        image: videoImage01,
        title: 'Javascript',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.6,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: videoImage01,
        title: 'Javascript basic',
        creator: 'Andrew',
        view: 251,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: videoImage01,
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: videoImage01,
        title: 'Javascript from basic to advanced',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    {
        id: uuidv4(),
        image: videoImage01,
        title: 'test',
        creator: 'Andrew',
        view: 250,
        duration: 5,
        rating: 4.7,
        type: 'video',
    },
    // courses
    {
        id: uuidv4(),
        image: courseImage01,
        title: 'Javascript from basic to advanced',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
        type: 'course',
    },
    {
        id: uuidv4(),
        image: courseImage01,
        title: 'Javascript from basic to advanced',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
        type: 'course',
    },
    {
        id: uuidv4(),
        image: courseImage01,
        title: 'Javascript from basic to advanced',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
        type: 'course',
    },
    {
        id: uuidv4(),
        image: courseImage01,
        title: 'test',
        description: 'Javascript from basic to advanced',
        creator: 'Andrew',
        currentPrice: 0,
        originalPrice: 4.99,
        enroll: 200,
        duration: 137,
        rating: 4.7,
        ratingCount: 28,
        type: 'course',
    },
    // creators
    {
        id: uuidv4(),
        image: creatorImage01,
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
    {
        id: uuidv4(),
        image: creatorImage01,
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
    {
        id: uuidv4(),
        image: creatorImage01,
        name: 'Javascript for life',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
    {
        id: uuidv4(),
        image: creatorImage01,
        name: 'Programer',
        level: 'Teacher',
        follower: 123,
        rating: 4.7,
        course: 10,
        description: 'Javascript is love. Javascript is life',
        badges: ['Javascript', 'Nodejs', 'Reactjs', 'Fullstack'],
        type: 'creator',
    },
]

export default function MSearch() {
    const [searchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')
    const filter = JSON.parse(searchParams.get('filter') ?? '{}')

    // const searchVideos =
    //     keyword && keyword != ''
    //         ? [...data].filter(
    //               (item) => item.type == 'video' && item.title?.toLowerCase().includes(keyword),
    //           )
    //         : [...data]

    // const searchCourses =
    //     keyword && keyword != ''
    //         ? [...data].filter(
    //               (item) => item.type == 'course' && item.title?.toLowerCase().includes(keyword),
    //           )
    //         : [...data]

    // const searchCreators =
    //     keyword && keyword != ''
    //         ? [...data].filter(
    //               (item) => item.type == 'creator' && item.name?.toLowerCase().includes(keyword),
    //           )
    //         : [...data]
    const searchData = useMemo(() => {
        // if (!keyword) {
        //     return data
        // }

        // re{video:...1,course:..2,...3]
        let result = []
        if (filter.type === 'all') {
            result = data
                .filter((e: any) => {
                    if (e?.title) return e.title.toLowerCase().includes(keyword)
                    else if (e?.name) return e.name.toLowerCase().includes(keyword)
                })
                .reduce((obj: any, cur: any) => {
                    if (cur.type === 'video') {
                        const newVideos: any[] =
                            obj?.videos == undefined ? [cur] : [...obj.videos, cur]
                        return { ...obj, videos: newVideos }
                    } else if (cur.type === 'course') {
                        const newCourses: any[] =
                            obj?.courses == undefined ? [cur] : [...obj.courses, cur]
                        return { ...obj, courses: newCourses }
                    } else if (cur.type === 'creator') {
                        const newCreators: any[] =
                            obj?.creators == undefined ? [cur] : [...obj.creators, cur]
                        return { ...obj, creators: newCreators }
                    }
                }, {})
            // const videos = result.filter((item: any) => item?.type === 'video')
            // const courses = result.filter((item: any) => item?.type === 'course')
            // const creators = result.filter((item: any) => item?.type === 'creator')
            // result = { videos: videos, courses: courses, creators: creators }
        } else {
            result = data.filter((e: any) => {
                if (e.type === filter.type) {
                    if (e?.title) return e.title.toLowerCase().includes(keyword)
                    else if (e?.name) return e.name.toLowerCase().includes(keyword)
                } else {
                    return false
                }
            })

            if (filter.type === 'video') {
                if (filter[filter.type].duration) {
                    const tokens = filter[filter.type].duration.split(',')
                    result = result.filter(
                        (video: any) =>
                            video?.duration >= parseInt(tokens[0]) &&
                            video?.duration <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].rating) {
                    const tokens = filter[filter.type].rating.split(',')
                    result = result.filter(
                        (video: any) =>
                            video?.rating >= parseInt(tokens[0]) &&
                            video?.rating <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].sortby) {
                    const sortby = filter[filter.type].sortby
                    if (sortby === 'popular') {
                        result = result.sort((a: any, b: any) => b?.view - a?.view)
                    } else if (sortby === 'rating') {
                        result = result.sort((a: any, b: any) => b?.rating - a?.rating)
                    }
                }
            } else if (filter.type === 'course') {
                const courseFilter: any = {}
                if (filter[filter.type].duration) {
                    const tokens = filter[filter.type].duration.split(',')
                    courseFilter.duration = {}
                    courseFilter.duration.low = parseInt(tokens[0])
                    courseFilter.duration.high = parseInt(tokens[1])
                }
                if (filter[filter.type].price) {
                    const tokens = filter[filter.type].price.split(',')
                    courseFilter.price = {}
                    courseFilter.price.low = parseInt(tokens[0])
                    courseFilter.price.high = parseInt(tokens[1])
                }
                if (filter[filter.type].rating) {
                    const tokens = filter[filter.type].rating.split(',')
                    courseFilter.rating = {}
                    courseFilter.rating.low = parseInt(tokens[0])
                    courseFilter.rating.high = parseInt(tokens[1])
                }
                if (filter[filter.type].sortby) {
                    courseFilter.sortby = filter[filter.type].sortby
                }
                result = result.filter(
                    (e: any) =>
                        e.duration >= courseFilter.duration.low &&
                        e.duration <= courseFilter.duration.high &&
                        e.currentPrice >= courseFilter.price.low &&
                        e.currentPrice <= courseFilter.price.high &&
                        e.rating >= courseFilter.rating.low &&
                        e.rating <= courseFilter.rating.high,
                )
                if (courseFilter.sortby !== 'all') {
                    if (courseFilter.sortby === 'popular') {
                        result = result.sort((a: any, b: any) => {
                            return b?.enroll - a?.enroll
                        })
                    } else if (courseFilter.sortby === 'rating') {
                        result = result.sort((a: any, b: any) => {
                            return b?.rating - a?.rating
                        })
                    }
                }
            } else if (filter.type === 'creator') {
                if (filter[filter.type].level) {
                    result = result.filter(
                        (creator: any) => creator?.level === filter[filter.type].level,
                    )
                }

                if (filter[filter.type].rating) {
                    const tokens = filter[filter.type].rating.split(',')
                    result = result.filter(
                        (video: any) =>
                            video?.rating >= parseInt(tokens[0]) &&
                            video?.rating <= parseInt(tokens[1]),
                    )
                }

                if (filter[filter.type].sortby) {
                    const sortby = filter[filter.type].sortby
                    if (sortby === 'popular') {
                        result = result.sort((a: any, b: any) => b?.follower - a?.follower)
                    } else if (sortby === 'rating') {
                        result = result.sort((a: any, b: any) => b?.rating - a?.rating)
                    }
                }
            }
        }

        return result
    }, [filter, keyword])

    console.log('Search data: ', searchData)

    return (
        <div className='flex flex-col flex-1'>
            <MHeader data={data} />
            {filter?.type == 'video' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Duration <b>2-5 mins</b>
                        </span>
                        <span>
                            | Rating <b>4-5*</b>
                        </span>
                        <span>
                            | Sort by <b>Popular</b>
                        </span>
                        <p>
                            <b>
                                {searchData.length} {searchData.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[82.5vh] overflow-y-scroll'>
                        {searchData.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MVideoCard
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        creator={item.creator}
                                        view={item.view}
                                        duration={item.duration}
                                        rating={item.rating}
                                    />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : filter?.type == 'course' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Duration <b>2-5 mins</b>
                        </span>
                        <span>
                            | Rating <b>4-5*</b>
                        </span>
                        <span>
                            | Sort by <b>Popular</b>
                        </span>
                        <p>
                            <b>
                                {searchData.length} {searchData.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchData.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MCourseCard
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        creator={item.creator}
                                        currentPrice={item.currentPrice}
                                        originalPrice={item.originalPrice}
                                        enroll={item.enroll}
                                        duration={item.duration}
                                        rating={item.rating}
                                        ratingCount={item.ratingCount}
                                    />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : filter?.type == 'creator' ? (
                <>
                    <section className='h-[8vh] px-2'>
                        <span>
                            Level <b>All</b>{' '}
                        </span>
                        <span>
                            | Rating <b>4-5*</b>
                        </span>
                        <p>
                            <b>
                                {searchData.length} {searchData.length < 2 ? 'result' : 'results'}
                            </b>
                        </p>
                    </section>
                    <section className='h-[83vh] overflow-y-scroll'>
                        {searchData.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <MCreatorCard
                                        id={item.id}
                                        image={item.image}
                                        name={item?.name}
                                        level={item?.level}
                                        follower={item?.follower}
                                        rating={item.rating}
                                        course={item?.course}
                                        description={item?.description}
                                        badges={item?.badges}
                                    />
                                </div>
                            )
                        })}
                    </section>
                </>
            ) : null}
            {/* <MVideoCard {...item} /> */}
        </div>
    )
}
