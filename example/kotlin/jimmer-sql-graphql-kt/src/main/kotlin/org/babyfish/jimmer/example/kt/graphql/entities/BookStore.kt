package org.babyfish.jimmer.example.kt.graphql.entities

import org.babyfish.jimmer.sql.*
import java.math.BigDecimal
import javax.validation.constraints.NotBlank

@Entity
interface BookStore {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, sequenceName = "BOOK_STORE_ID_SEQ")
    val id: Long

    @Key
    val name: String

    val website: String?

    @Transient
    val avgPrice: BigDecimal

    @OneToMany(mappedBy = "store")
    val books: List<Book>
}